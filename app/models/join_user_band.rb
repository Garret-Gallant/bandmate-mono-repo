class JoinUserBand < ApplicationRecord
  belongs_to :user
  belongs_to :band
end
