![icon_with_name](http://miep-hd.froxot.com/cuscon/res/icon_with_name.png)

Icon-Pack with transpanrent icons that are outlined for good visibility.

Contains the android app in `app` and the website under `webpage`

# Supported Apps

http://miep-hd.froxot.com/cuscon

# Requests

Please send request to <a href="mailto:cuscon-requests@froxot.de">cuscon-requests@froxot.de</a>

# Pull Requests

If you want to contribute icons, you can use the icons under `to-do` or send a icon request to yourself to get the things you need. Then edit the icons so they match the criteria (Requirements for contributing icons). These go to `app\src\main\res\drawable-nodpi` and `webpage\icons`. After that, extract the parts for your icons from the xml files and paste these in the corresponding files in `app\src\main\res\xml`. The title, src(drawable), category(categoryid) and the name of you(author) go to `webpage/iconsdata/icons.json` as a JSON object. If you've used any translationids in your JSON object, add these to the files in `webpage\translations`. New categories go to `webpage/iconsdata/categories.json`. Finally, create a pull request with these changes.<br>

<b>If you just want to create the image, please upload it with the corresponding data in the xml files as an issue.</b>

# Requirements for contributing icons
- Icons must be outlined in black
- Icon must be visible on black background
- dimension of 512x512px
- should have approximate 30px transparent border
- should have approximate 12px brush size

# Contributors
<a href="https://github.com/MiepHD" target="_blank"><img class="profile" src="https://avatars.githubusercontent.com/u/63968466?s=64&v=4"></a>
<a href="https://github.com/sourcrowd450" target="_blank"><img class="profile" src="https://avatars.githubusercontent.com/u/107772832?s=64&v=4"></a>

# License
```
Copyright (c) 2014-2016 Dani Mahardhika

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
