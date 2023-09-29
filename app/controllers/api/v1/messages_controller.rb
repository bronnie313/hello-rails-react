class Api::V1::MessagesController < ApplicationController
  def index
    @random_greeting = Message.order('RANDOM()').first
    render json: { greeting: @random_greeting&.text }
  end
end
