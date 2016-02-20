class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :published, :description
  has_one :user
end
