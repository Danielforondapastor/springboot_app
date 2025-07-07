package com.danielforonda_springboot_app.controllers;

import com.danielforonda_springboot_app.model.ChatRequest;
import com.danielforonda_springboot_app.model.ChatResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ChatController {

    @PostMapping("/chat")
    public ChatResponse chat(@RequestBody ChatRequest request) {
        String input = request.getText();

        // Aquí puedes conectar a una IA o lógica propia
        String reply = "Recibido: " + input;

        return new ChatResponse(reply);
    }
}