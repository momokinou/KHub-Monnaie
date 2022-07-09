#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri_plugin_sql::{Migration, MigrationKind, TauriSql};

fn main() {
  let context = tauri::generate_context!();
  tauri::Builder::default()
    .menu(if cfg!(target_os = "macos") {
      tauri::Menu::os_default(&context.package_info().name)
    } else {
      tauri::Menu::default()
    })
    .plugin(TauriSql::default().add_migrations(
      "sqlite:KHub.db",
      vec![
        Migration {
          version: 1,
          description: "create and fill category table",
          sql: include_str!("../migrations/category.sql"),
          kind: MigrationKind::Up,
        },
        Migration {
          version: 1,
          description: "create purchases table",
          sql: include_str!("../migrations/achat.sql"),
          kind: MigrationKind::Up,
        },
      ]
    ))
    .run(context)
    .expect("error while running tauri application");
}
