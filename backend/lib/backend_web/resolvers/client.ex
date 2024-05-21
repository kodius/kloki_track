defmodule BackendWeb.Resolvers.Client do
  alias Backend.Tracker

  def list_clients(_parent, _args, _resolution) do
    {:ok, Tracker.list_clients()}
  end

  def create_client(_parent, %{name: name}, _resolution) do
    Tracker.create_client(%{name: name})
  end

  def update_client(_parent, %{id: id, name: name}, _resolution) do
    Tracker.update_client(id, %{name: name})
  end

  def archive_client(_parent, %{id: id, archived: archived}, _resolution) do
    Tracker.update_client(id, %{archived: archived})
  end
end
