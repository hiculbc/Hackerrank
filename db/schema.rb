# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_12_11_102514) do
  create_table "questions", force: :cascade do |t|
    t.string "question"
    t.integer "topic"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "testcases", force: :cascade do |t|
    t.string "testcase"
    t.string "solution"
    t.integer "question_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_testcases_on_question_id"
  end

  create_table "user_question_statuses", force: :cascade do |t|
    t.integer "solved"
    t.integer "user_id", null: false
    t.integer "question_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_user_question_statuses_on_question_id"
    t.index ["user_id"], name: "index_user_question_statuses_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.string "password_confirmation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "testcases", "questions"
  add_foreign_key "user_question_statuses", "questions"
  add_foreign_key "user_question_statuses", "users"
end
