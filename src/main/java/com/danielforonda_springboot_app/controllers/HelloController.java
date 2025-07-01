package com.danielforonda_springboot_app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/app/foo")
    public Map<String, String> foo(){
        Map<String, String> json = new HashMap<>();
        json.put("message","Hola mundo spring boot api rest");
        json.put("date",new Date().toString());

        return json;
    }
}
