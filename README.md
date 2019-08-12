# scratch-blocks
##### Scratch Blocks is a library for building creative computing interfaces.
[![Build Status](https://travis-ci.org/LLK/scratch-blocks.svg?branch=develop)](https://travis-ci.org/LLK/scratch-blocks)
[![Dependency Status](https://david-dm.org/LLK/scratch-blocks.svg)](https://david-dm.org/LLK/scratch-blocks)
[![devDependency Status](https://david-dm.org/LLK/scratch-blocks/dev-status.svg)](https://david-dm.org/LLK/scratch-blocks#info=devDependencies)

![](https://cloud.githubusercontent.com/assets/747641/15227351/c37c09da-1854-11e6-8dc7-9a298f2b1f01.jpg)

## Introduction
Scratch Blocks is a fork of Google's [Blockly](https://github.com/google/blockly) project that provides a design specification and codebase for building creative computing interfaces. Together with the [Scratch Virtual Machine (VM)](https://github.com/LLK/scratch-vm) this codebase allows for the rapid design and development of visual programming interfaces. Unlike [Blockly](https://github.com/google/blockly), Scratch Blocks does not use [code generators](https://developers.google.com/blockly/guides/configure/web/code-generators), but rather leverages the [Scratch Virtual Machine](https://github.com/LLK/scratch-vm) to create highly dynamic, interactive programming environments.

*This project is in active development and should be considered a "developer preview" at this time.*

## Two Types of Blocks
![](https://cloud.githubusercontent.com/assets/747641/15255731/dad4d028-190b-11e6-9c16-8df7445adc96.png)

Scratch Blocks brings together two different programming "grammars" that the Scratch Team has designed and continued to refine over the past decade. The standard [Scratch](https://scratch.mit.edu) grammar uses blocks that snap together vertically, much like LEGO bricks. For our [ScratchJr](https://scratchjr.org) software, intended for younger children, we developed blocks that are labelled with icons rather than words, and snap together horizontally rather than vertically. We have found that the horizontal grammar is not only friendlier for beginning programmers but also better suited for devices with small screens.

## Documentation
The "getting started" guide including [FAQ](https://scratch.mit.edu/developers#faq) and [design documentation](https://github.com/LLK/scratch-blocks/wiki/Design) can be found in the [wiki](https://github.com/LLK/scratch-blocks/wiki).

## Donate
We provide [Scratch](https://scratch.mit.edu) free of charge, and want to keep it that way! Please consider making a [donation](https://secure.donationpay.org/scratchfoundation/) to support our continued engineering, design, community, and resource development efforts. Donations of any size are appreciated. Thank you!

# 开发说明
###### edit by LASTiMP
## 关于安装和使用
### 安装
1. 安装scratch-gui
2. 克隆下载scratch-blocks
3. 执行npm install
4. 用有管理员权限的控制台在scratch-blocks目录下执行npm link
5. 在scratch-gui目录下执行npm link scratch-blocks
6. 如果重新执行了npm install， 需要重新执行link
###使用
1. 每次修改后执行npm run prepublish（需要ios环境）
2. 如果是Windows环境，需要在ios环境下压缩后将7个_compressed_和_uncompressed_文件复制过来并覆盖
由于这些文件会被git忽略掉，建议上传之前先压缩成压缩包
3. 重新执行npm run进行硬刷新
## 关于修改积木块
* 修改关于积木接受的数据类型，修改blocks_common；
* 修改水平积木块（见图1左侧）， 修改blocks-horizontal；
* 修改垂直积木块（见图1右侧），修改blocks-vertical；
* 添加/删除/修改积木块时，建议同时更新对应的defaul_toolbox.js文件
* 添加/删除/修改积木块时，要同时更新scratch-gui\src\lib中的make-toolbox-xml.js文件，
以及scratch-gui\src\components\genertate-Lua\sortCode.js文件以生成对应的lua代码
* 添加/删除/修改积木块时，要同时更新mgs文件夹中所有的文件，其中包括标注为自动生成的文件
* 添加/删除data类积木块时，要同时更新core/data_category.js文件
* 新建积木块种类时，需要在core/colors.js文件中添加对应的颜色
* 查看/修改垂直积木块形状类型，请查看blocks_vertical\vertical_extensions.js文件

