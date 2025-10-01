// game.cpp
// Core game logic for the browser card game
// This file does NOT handle rendering, animations, or UI effects.
// Instead, it emits events that index.html (via JS) will listen to and respond with visuals.
// Think of this as the "brain" of the game, while index.html is the "face".


#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <functional>


// ===============================
// Utility: Event System
// ===============================
// Each event is just a string + optional data.
// index.html will handle the event visually.


struct Event {
std::string name; // e.g. "StartGame", "PlayerEliminated"
std::map<std::string, std::string> data; // key/value data payload
};


class EventBus {
public:
std::vector<Event> events;


void Emit(const std::string& name, const std::map<std::string, std::string>& data = {}) {
Event e{name, data};
events.push_back(e);
std::cout << "[Event] " << name << " triggered." << std::endl;
}


void Clear() {
events.clear();
}
};


// Global EventBus
EventBus gEventBus;


// ===============================
// Game State
// ===============================


enum class Language {
ENGLISH,
CHINESE,
JAPANESE
};


class GameState {
public:
int numPlayers = 0; // Number of players in the current game
bool started = false; // Has the game started?
Language currentLang = Language::ENGLISH;
std::vector<bool> alive; // Alive status of each player


void Reset() {
numPlayers = 0;
started = false;
alive.clear();
}
};


GameState gState;


// ===============================
// Translation Strings
// ===============================


std::map<Language, std::map<std::string, std::string>> TRANSLATIONS = {
{Language::ENGLISH, {
{"TITLE", "Don't Do Challenge"},
{"PLAYER_COUNT", "Number of Players"},
{"START", "START"},
{"CONFIRM_DEATH", "CLICK PLAYER TO CONFIRM DEATH"}
}
