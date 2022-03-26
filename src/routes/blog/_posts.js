const modules = import.meta.globEager('/posts/*.{md,svx}')

export const posts = Object.entries(modules).map(
  ([filepath, module]) => {
    const slug = filepath.slice(7, -3)
    const { metadata } = module
    const { html } = module.default.render()
    return {
      slug,
      html,
      ...metadata,
    }
  }
)
