---
title: "SpringBoot Getting Started"
summary: "Getting started"
date: "May 11 2024"
draft: false
tags:
- SpringBoot
---

- This article gives an overview of various Spring configuration styles and helps you understand the complexity of configuring Spring applications.

- Spring is a very popular Java-based framework for building web and enterprise applications. Unlike many other frameworks, which focus on only one area, Spring framework provides a wide verity of features addressing the modern business needs via its portfolio projects.

- Spring framework provides flexibility to configure beans in multiple ways such as XML, Annotations, and JavaConfig. With the number of features increased the complexity also gets increased and configuring Spring applications becomes tedious and error-prone.

- The Spring team created Spring Boot to address the complexity of configuration.

- But before diving into SpringBoot, we will take a quick look at the Spring framework and see what kind of problems SpringBoot is trying to address.

## Create a Simple Web Application
 
 ```java
 package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/")
	public String index() {
		return "Greetings from Spring Boot!";
	}

}
```