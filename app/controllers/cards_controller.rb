class CardsController < ApplicationController
  def index
  end

  def new
  end

  def create
    @card = Card.new(card_params)
    if params[:preview_button] || !@card.save

      render action: :new
    else
      flash[:notice] = 'Successfully created flashcard'
      redirect_to @card
    end
  end

  def show
    @card = Card.find(params[:id])
  end

  private

  def card_params
    params.require(:card).permit(:question, :answer)
  end
end
