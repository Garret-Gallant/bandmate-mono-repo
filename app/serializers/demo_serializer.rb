class DemoSerializer < ActiveModel::Serializer
  attributes :id, :name, :audio, :total_plays, :is_favorite?
  has_one :user

  # def audio
  #   rails_blob_path(demo.audio, only_path: true) if demo.audio_attached?
  # end

end
