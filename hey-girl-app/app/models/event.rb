class Event < ApplicationRecord
  belongs_to :industry, foreign_key: 'industry_id'
  has_and_belongs_to_many :users
end
