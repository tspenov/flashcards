Rails.application.routes.draw do
  resources :cards
  post '/cards/preview', to: 'cards#preview', via: :post

  root 'cards#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
