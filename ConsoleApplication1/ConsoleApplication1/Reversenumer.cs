using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Reversenumer
    {
        static void Main()
        {
            int sum = 0; int temp;
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                sum = 10 * sum + n % 10;
                n = n / 10;
            }
            Console.WriteLine(sum);
            Console.ReadLine();
        }
       
    }
}
