class BandSerializer < ActiveModel::Serializer
  attributes :id, :band_name, :founder_id

  has_many :users
end
