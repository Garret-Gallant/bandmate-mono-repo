class DemoSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :audio, :total_plays, :is_favorite?, :audio_file
  has_one :user

  def audio_file
    rails_blob_path(object.audio_file, only_path: true) if object.audio_file.attached?
  end
end
