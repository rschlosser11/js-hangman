class WordsController < ApplicationController
    def index
        if params[:category_id]
            words = Word.where(category_id: params[:category_id])
        else
            words = Word.all 
        end
        render json: words, except: [:created_at, :updated_at]
    end

    def create
        word = Word.create(word: params[:word], category_id: params[:category_id])
        render json: word, except: [:created_at, :updated_at]
    end
end