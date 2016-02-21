class AddressSerializer < ActiveModel::Serializer
  attributes :id, :location, :longitude, :latitude, :city
end
