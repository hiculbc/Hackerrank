require "test_helper"

class TestcasesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get testcases_index_url
    assert_response :success
  end

  test "should get show" do
    get testcases_show_url
    assert_response :success
  end
end
