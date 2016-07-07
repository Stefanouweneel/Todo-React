require 'rails_helper'

describe TodosController do

  describe "GETS #index" do

    it "GETS index" do
      get :index
      expect(response).to be_success
      expect(response).to render_template("index")
    end

    it "assigns all todos as @todos" do
      todo = Todo.create(title: "Learn jQuery")
      get :index
      expect(assigns(:todos)).to eq([todo])
    end
  end

  describe "GETS new" do

    it "assigns a new todo as @todo" do
      get :new
      expect(assigns(:todo)).to be_a_new(Todo)
      expect(response).to render_template("new")
    end
  end
end
