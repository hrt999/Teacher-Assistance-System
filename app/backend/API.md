# API文档

## 1、登录功能

POST——Teacher-Assistance-System/app/backend/login/login.php

参数：id, password, type（登陆的身份类型，1为学生，2为教师）

返回:

```php
    code: 0（学生登录成功）
    msg: 登陆成功
    res:{
        "token" （加密后的用户token，用于验证）
        "id"（student_id）
        'class_id'   
        'teacher_id'
        'name'    (sname)
        'type'     (此时为1，代表学生)
        'group_id'
    }
```
```php
	"code" => 1,（学生登录成功）
    "msg" => "登陆成功，其班级无教师信息",
	"res" => array(
         "token" 
         "id"    （student_id）
         'class_id' 
         'teacher_id'（null，没有找到教师信息）
         'name'  (sname)
         'type'   (此时为1，代表学生)
         'group_id' 
    )
```

```php
    "code" => 2,
    "msg" => "登录失败,用户名或密码或类型错误",
    "res" => array()
```

```php
	"code" => 3,(教师登陆成功)
    "msg" => "登陆成功",
    "res" => array(
          "token"
          "id"  （teacher_id）
          'class_id'  (null)
          'teacher_id'   (null)
          'name' （姓名）
          'type'  (此时为2，代表教师)
          'group_id' （null）
	)
```

## 2、查找一个班级的通知列表功能

POST——Teacher-Assistance-System/app/backend/aboutNotice/getNotices.php

参数：class_id（查找一个班级的通知）

返回:

```php
		"code" => 0,
        "msg" => "查找成功",
        "res" => $notices
          
        //$notices是一个数组
        $notices[] = array(
            "notice_id" （通知的ID）,
            "title" ,
            "level" （级别，重要程度）,
            "time"（发布时间）
            "content" （通知内容）
        );
```

```php
		"code" => 1,
        "msg" => "查找失败，班级ID错误",
        "res" => null
```

## 3、查找一则通知功能

POST——Teacher-Assistance-System/app/backend/aboutNotice/getNoticeDetail.php

参数：notice_id

返回:

```php
		"code" => 0,
        "msg" => "查找成功",
        "res" => array(
            "notice_id" 
            "title"
            "content"
            "time"
            "level"(0为普通，1为重要)
        )
```

```php
		"code" => 1,
        "msg" => "查找失败，notice_id错误",
        "res" => null
```

## 4、查找一个教师的文章列表功能

POST——Teacher-Assistance-System/app/backend/aboutArticle/getArticles.php

参数：teacher_id

返回:

```php
		"code" => 0,
        "msg" => "查找成功",
        "res" => $articles
 //其中$articles为数组的数组
          $articles[] = array(
            "article_id"
            "title"
            "content"
            "author"
            "time"
        );
```

```php
		"code" => 1,
        "msg" => "查找失败，teacher_id错误",
        "res" => null
```

## 5、查找一篇文章

POST——Teacher-Assistance-System/app/backend/aboutArticle/getArticleDetail.php

参数：article_id

返回:

```php
		"code" => 0,
        "msg" => "查找成功",
        "res" => array(
            "article_id"
            "title"
            "content" 
            "author"
            "time"
        )
```

```php
		"code" => 1,
        "msg" => "查找失败，article_id错误",
        "res" => null
```

## 6、返回home页面信息（教师联系方式）

POST——Teacher-Assistance-System/app/backend/getHome.php

参数：class_id

返回:

```php
		"code" => 0,
        "msg" => "查找成功",
        "res" => array(
            "name" （教师名字）
            "phone" 
            "email" 
            "wechat"
            "qq" 
            "other_contact" 
        )
```

```php
		"code" => 1,
        "msg" => "查找失败，class_id错误",
        "res" => null
```

## 7、返回课程信息

POST——Teacher-Assistance-System/app/backend/getInfo/getCourseInfo.php

参数：teacher_id

返回:

```php
		"code" => 0,
        "msg" => "查找成功",
        "res" => array(
            "course_info"
        )
```

```php
		"code" => 1,
        "msg" => "查找失败，class_id错误",
        "res" => null
```

## 8、返回教师信息

POST——Teacher-Assistance-System/app/backend/getInfo/getTeacherInfo.php

参数：teacher_id

返回:

```php
        "code" => 0,
        "msg" => "查找成功",
        "res" => array(
            "old_teaching"
            "achievement"
            "teaching_style"
            "publishment"
            "honor"
            "other_info"
        )
```

```php
		"code" => 1,
        "msg" => "查找失败，class_id错误",
        "res" => null
```

## 9、返回教师资源列表

POST——Teacher-Assistance-System/app/backend/aboutResource/getResourceList

参数：teacher_id

返回:

```php
		"code" => 0,
        "msg" => "查找成功",
        "res" => $resourceList
          
         其中
          $resourceList[] = array(
            "resource_id" 
            "name" 资源名字
            "path"路径
            "upload_time" 
            "uploader_name"
            "size" 资源大小
        );
```

```php
		"code" => 1,
        "msg" => "查找失败，class_id错误",
        "res" => null
```

