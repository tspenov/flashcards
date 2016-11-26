module ApplicationHelper
  def markdown(text)
    MarkdownService.new(text).call
  end
end
