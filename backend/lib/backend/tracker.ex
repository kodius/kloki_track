defmodule Backend.Tracker do
  import Ecto.Query, warn: false
  alias Backend.Repo
  alias Backend.Tracker.{Client, Project}

  def list_clients do
    Repo.all(from c in Client, where: c.archived == false)
  end

  def create_client(attrs \\ %{}) do
    %Client{}
    |> Client.changeset(attrs)
    |> Repo.insert()
  end

  def update_client(id, attrs) do
    id
    |> get_client!()
    |> Client.changeset(attrs)
    |> Repo.update()
  end

  def get_client!(id), do: Repo.get!(Client, id)

  def list_projects do
    Repo.all(from p in Project, where: p.archived == false, preload: [:client])
  end

  def create_project(attrs \\ %{}) do
    %Project{}
    |> Project.changeset(attrs)
    |> Repo.insert()
  end

  def update_project(id, attrs) do
    id
    |> get_project!()
    |> Project.changeset(attrs)
    |> Repo.update()
  end

  def get_project!(id), do: Repo.get!(Project, id)
end
