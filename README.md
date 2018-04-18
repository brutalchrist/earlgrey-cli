# earlgrey-cli
Command line inteface for [Earlgrey Framework]()

## Instalation

```bash
$ npm install earlgrey-cli -g
```

## Usage

### Init

```bash
$ earlgrey-cli init [projectname] --origin [url_git_repository]
```

#### Examples

```bash
$ earlgrey-cli init backend
```

```bash
$ earlgrey-cli init backend --origin git@github.com:acalvoa/earlgrey-seed.git
```

### Generators

#### Controller

```bash
$ earlgrey-cli generate controller [controller_name]
```

#### Helper

```bash
$ earlgrey-cli generate helper [helper_name]
```

#### Type

```bash
$ earlgrey-cli generate type [type_name]
```

#### Policy

```bash
$ earlgrey-cli generate policy [policy_name]
```

#### Model

```bash
$ earlgrey-cli generate model [model_name] -t [tablename]
```
