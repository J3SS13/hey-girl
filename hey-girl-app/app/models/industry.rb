class Industry < ApplicationRecord
  has_many :events, dependent: :nullify
  has_many :posts, dependent: :nullify

end
