bucket         = "connery-terraform-remote-state-np"
key            = "deepl/v1/terraform.tfstate"
region         = "eu-central-1"
encrypt        = true
dynamodb_table = "connery-terraform-statelock"