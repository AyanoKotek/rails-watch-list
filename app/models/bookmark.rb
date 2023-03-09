class Bookmark < ApplicationRecord
  belongs_to :movie
  belongs_to :list
  validates :comment, length: {minimum: 6}
  # [movie, list] pairings should be unique
  validates :movie_id, uniqueness: { scope: [:list_id] }
end
