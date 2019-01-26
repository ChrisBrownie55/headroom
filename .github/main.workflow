workflow "Build, Test, and Deploy" {
  on = "push"
  resolves = ["Deploy to Netlify"]
}

action "Install dependencies" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "Build" {
  uses = "borales/actions-yarn@master"
  needs = ["Install dependencies"]
  args = "build"
}

action "Test" {
  uses = "borales/actions-yarn@master"
  needs = ["Build"]
  args = "test"
}

action "Deploy to Netlify" {
  uses = "netlify/actions/build@master"
  needs = ["Test"]
  secrets = ["GITHUB_TOKEN", "NETLIFY_SITE_ID"]
}
