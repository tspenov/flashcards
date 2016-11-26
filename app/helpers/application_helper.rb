module ApplicationHelper
  def markdown(text)
    markdown = Redcarpet::Markdown.new(
      Redcarpet::Render::HTML,
      autolink: true,
      fenced_code_blocks: true,
      hard_wrap: true
    )
    markdown.render(text)
  end
end
