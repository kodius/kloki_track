defmodule BackendWeb.Auth.RequireAuth do
  @behaviour Absinthe.Middleware

  alias Absinthe.Resolution
  alias Helpers.ErrorBuilder

  def call(%{context: %{current_user: %{active: true}}} = res, _config) do
    res
  end

  def call(res, config) do
    Resolution.put_result(res, ErrorBuilder.invalid_authorization())
  end
end
