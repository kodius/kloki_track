defmodule Schemas.User do
  use Ecto.Schema

  schema "users" do
    field(:email, :string)
    field(:password_digest, :string)
    field(:first_name, :string)
    field(:last_name, :string)
    field(:active, :boolean)
  end
end
