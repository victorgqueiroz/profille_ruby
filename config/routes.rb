Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"

  get "about", to: "pages#about", as: :about
  get "carrer", to: "pages#carrer", as: :resume
  get "formation", to: "pages#formation", as: :formation
  get "projects", to: "pages#projects", as: :projects
end
