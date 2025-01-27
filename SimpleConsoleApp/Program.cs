using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello! This is a simple C# console application.");
        Console.WriteLine("What is your name?");
        string name = Console.ReadLine();
        Console.WriteLine($"Welcome, {name}!");
    }
}
