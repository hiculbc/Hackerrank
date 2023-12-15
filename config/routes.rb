Rails.application.routes.draw do
  post 'sessions/create'
  get 'sessions/destroy'
  get '/topics', to: 'questions#topics'

  resources :users
  resources :questions, only: %i[index show] do
    member do
      post :check
    end
    resources :testcases, only: [:index]
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
