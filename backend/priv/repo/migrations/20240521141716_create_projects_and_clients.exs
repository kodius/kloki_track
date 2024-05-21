defmodule Backend.Repo.Migrations.CreateProjectsAndClients do
  use Ecto.Migration

  def change do
    create table(:clients, prefix: "tracker") do
      add :name, :string, null: false
      add :archived, :boolean, default: false, null: false

      timestamps()
    end

    create table(:projects, prefix: "tracker") do
      add :client_id, references(:clients, prefix: "tracker", on_delete: :nothing), null: false
      add :name, :string, null: false
      add :public, :boolean, default: false, null: false
      add :archived, :boolean, default: false, null: false

      timestamps()
    end

    create index(:projects, [:client_id], prefix: "tracker")
  end
end
