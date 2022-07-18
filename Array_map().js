  <script>
      /*
             Map function in array and objects.

             What is map fucntion?
                map function is used to convert array or objects to another array or objects.
                
                Syntax:
                    array.map(function(currentValue, index, arr), thisValue)

        */
      var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var b = a.map(table);
      document.write(b);
      function table(x) {
        return x * 2;
      }
      document.write("<br> <br>");
      var c = [
        { fname: "Muhammad Shakri", age: 21 },
        { fname: "Anum Mustafa", age: 22 },
      ];

      var d = c.map(test);
      function test(f) {
        return f.fname + " " + f.age;
      }
