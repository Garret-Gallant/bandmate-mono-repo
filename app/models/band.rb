class Band < ApplicationRecord
  has_many :join_user_bands
  has_many :users, through: :join_user_bands
end
