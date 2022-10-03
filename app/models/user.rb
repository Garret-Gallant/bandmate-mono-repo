class User < ApplicationRecord
  has_many :demos
  has_many :join_user_bands
  has_many :bands, through: :join_user_bands
  has_secure_password

  validates :username, uniqueness: true
end
