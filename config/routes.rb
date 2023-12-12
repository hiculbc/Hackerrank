Rails.application.routes.draw do
  post 'sessions/create'
  get 'sessions/destroy'
  get 'testcases/index'
  get 'testcases/show'
  get '/topics', to: 'questions#topics'

  resources :users
  resources :questions, only: %i[index show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
