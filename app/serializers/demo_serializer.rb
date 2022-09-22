class DemoSerializer < ActiveModel::Serializer
  attributes :id, :audio, :total_plays, :is_favorite?
  has_one :user
end
