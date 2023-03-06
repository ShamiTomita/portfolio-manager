class Project < ApplicationRecord
    validates :title, presence: true 
    validates :description, presence: true 
    has_one_attached :image

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end 
end
