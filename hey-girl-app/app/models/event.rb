class Event < ApplicationRecord
  belongs_to :industry, foreign_key: 'industry_id'
end
