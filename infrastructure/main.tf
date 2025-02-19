terraform {
  backend "s3" {}
}

module "deploy-plugin-on-aws-lambda" {
  source = "github.com/connery-io/deploy-plugin-on-aws-lambda?ref=v0.1.0"

  plugin_name    = "deepl"
  plugin_version = "v1"
}