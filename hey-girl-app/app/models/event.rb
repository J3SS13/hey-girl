class Event < ApplicationRecord
  belongs_to :industries, foreign_key: 'industry_id'
end
