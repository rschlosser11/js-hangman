class Category < ApplicationRecord
    has_many :words
    validates :name, uniqueness: true, presence: true; 
end
