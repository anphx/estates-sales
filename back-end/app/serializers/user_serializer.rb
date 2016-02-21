class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :full_name, :avatar_url, :created_at, :updated_at, :auth_token, :role
end
