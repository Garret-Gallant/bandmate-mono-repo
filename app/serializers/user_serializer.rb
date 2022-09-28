class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :instrument, :fav_genre, :avatar, :bio
  has_many :demos
end
