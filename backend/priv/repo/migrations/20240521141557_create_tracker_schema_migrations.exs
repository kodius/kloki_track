defmodule Backend.Repo.Migrations.CreateTrackerSchemaMigrations do
  use Ecto.Migration

  def change do
    execute("CREATE SCHEMA IF NOT EXISTS tracker")

    create table(:tracker_schema_migrations, primary_key: false, prefix: "tracker") do
      add :version, :bigint, primary_key: true
      add :inserted_at, :naive_datetime, null: false
    end
  end
end
